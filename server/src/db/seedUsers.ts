import bcrypt from "bcrypt";
import pool from "./pool.js";

const users = [
    {name: 'Ashley', username: 'ashley', password: 'tresMarias-Ashley', role: 'Investor'},
    {name: 'Nesh', username: 'nesh', password: 'tresMarias-Nesh', role: 'Investor'},
    {name: 'MJ', username: 'mj', password: 'tresMarias-MJ', role: 'Investor'},
];

async function seed() {
    try{
        for (const user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
        
            await pool.query(
                `INSERT INTO users (name, username, password, role)
                VALUES ($1, $2, $3, $4)`, 
                [user.name, user.username, hashedPassword, user.role]
            )
        }
        console.log("Users seeded successfully!")
    } catch(err) {
        console.error(err);
    } finally {
        pool.end();
    }
}

seed()