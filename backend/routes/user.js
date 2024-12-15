const express = require("express");
const z = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { PrismaClient } = require("@prisma/client")

const router = express.Router();

const prisma = new PrismaClient();

const signupuserBody = z.object({
  email: z.string().max(50),
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
  password: z.string().min(6)
});

const signinuserBody = z.object({
  email: z.string().max(50),
  password: z.string().min(6)
});

router.get("/", async (req, res) => {
  return res.json({ message: "Healthy user router" });
})

router.post("/signup", async (req, res) => {

  const userCredentialValidation = signupuserBody.parse(req.body);
  if (!userCredentialValidation) {
    return res.status(411).json({
      message: "Wrong inputs. Please read the instructions."
    })
  }


  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const email = req.body.email;

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    }
  })
  if (existingUser) {
    return res.status(411).json({
      message: "User already exists. Log in instead."
    })
  }

  const createUser = await prisma.user.create({
    data: {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    },
  })

  const userId = createUser.id;
  const token = jwt.sign({
    userId
  }, JWT_SECRET);

  return res.status(201).json({
    message: "User created successfully",
    welcomeMessage: `Hello ${firstName}`,
    token: token
  })
})

router.post("/signin", async (req, res) => {

  const userCredentialValidation = signinuserBody.parse(req.body);
  if (!userCredentialValidation) {
    return res.status(411).json({
      message: "Wrong inputs. Please read the instructions."
    })
  }

  const password = req.body.password;
  const email = req.body.email;


  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })



  const userId = findUser.id;
  const token = jwt.sign({
    userId
  }, JWT_SECRET);

  return res.status(201).json({
    message: "User Signed in successfully",
    welcomeMessage: `Welcome back`,
    token: token
  })
})


module.exports = router;
