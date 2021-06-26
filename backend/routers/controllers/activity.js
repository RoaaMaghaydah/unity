const db = require("../../db/db")


const addActivity = (req, res) => {
    const id = req.params.id;
    const query = `INSERT INTO activities (title, start_date, finish_date ,location, details, requirements , activities ,  images , estimated_budget) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?) WHERE  id=? `;
    const { title, start_date, finish_date, location, details, requirements, activities, images, estimated_budget } = req.body
    const data = [title, start_date, finish_date, location, details, requirements, activities, images, estimated_budget, id];
    db.query(query, data, (err, results) => {
        if (err) throw err;
        res.status(201).json(results)
        // res.json("added complete")
    });
};
const getAllActivities = (req, res) => {   
    const query = 'SELECT activities FROM  activities INNER JOIN  users ON  activities.location=users.currently_in AND users.id=user_id';
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
    });
};








module.exports = {
    addActivity,
    getAllActivities,
};