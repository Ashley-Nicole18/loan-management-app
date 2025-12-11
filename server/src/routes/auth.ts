import express from "express"
import pool from "../db/pool"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router()

router.post("/login", async (req, res) => {
    const {username, password} = req.body

    try {
        const result = await pool.query(
            `SELECT * FROM users WHERE username = $1`,
            [username]
        )

        const user = result.rows[0]

        if (!user) {
            return res.status(401).json({message: "You are not qualified to access this website"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({message: "Invalid password"})
        }

        const token = jwt.sign(
            {id: user.id, role: user.role},
            process.env.JWT_SECRET!,
            {expiresIn: '7d'}
        )

        res.json(
            {message: 'Login successful!',
            token,
            username: user.username,
            role: user.role
    });

    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error', err})
    }
})

export default router