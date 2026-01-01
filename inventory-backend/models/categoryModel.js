import db from './db.js';

export const getAllCategories = async() => {
    const result = await db.manyOrNone(`
        SELECT * FROM category ORDER BY category_id ASC
        `);
    return result;
}

