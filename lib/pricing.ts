const { CHECKOUT_URL_TRAINING, CHECKOUT_URL_NUTRITION, CHECKOUT_URL_BUNDLE } = process.env;

export const checkout = {
  training: CHECKOUT_URL_TRAINING ?? '#',
  nutrition: CHECKOUT_URL_NUTRITION ?? '#',
  bundle: CHECKOUT_URL_BUNDLE ?? '#'
};
