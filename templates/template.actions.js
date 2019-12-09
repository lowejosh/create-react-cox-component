const actions = () => `export const setState = (payload: object) => {
  return <const>{
  type: "SET_STATE",
    payload
  };
};`;

module.exports = actions;
