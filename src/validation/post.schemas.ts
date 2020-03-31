import joi from "@hapi/joi";

export const createPostDtaSchema = joi.object().keys({
  content: joi
    .string()
    .trim()
    .min(6)
    .required(),
  title: joi
    .string()
    .trim()
    .min(3)
    .required(),
  imageUrl: joi
    .string()
    .trim()
    .required()
});
