import joi from "joi";

export const createPostDtaSchema = joi.object().keys({
  title: joi
    .string()
    .trim()
    .min(3)
    .required(),
  content: joi
    .string()
    .trim()
    .min(3)
    .required()
});
