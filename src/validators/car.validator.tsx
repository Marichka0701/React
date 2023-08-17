import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().required().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}/).min(1).max(20).messages({
        'string.empty': 'Поле \'brand\' є обов\'язковим',
        'string.pattern.base': 'Невалідний brand',
        'string.max': 'Максимальна довжина 20 символів',
        'string.min': 'Мінімальна довжина 1 символ',
    }),
    price: Joi.number().required().min(0).max(1000000).messages({
        'number.base': 'Поле повинно містити тільки числа',
        'string.empty': 'Поле \'price\' є обов\'язковим',
        'number.max': 'Максимальна ціна 1000000$',
        'number.min': 'Мінімальна ціна 0$',
    }),
    year: Joi.number().required().min(1990).max(new Date().getFullYear()).messages({
        'number.base': 'Поле повинно містити тільки числа',
        'string.empty': 'Поле \'year\' є обов\'язковим',
        'number.max': `Максимальний рік ${new Date().getFullYear()}`,
        'number.min': 'Мінімальний рік 1990',
    }),
})

export {
    carValidator,
}