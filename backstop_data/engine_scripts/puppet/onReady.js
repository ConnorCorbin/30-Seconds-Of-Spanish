module.exports = async (page, scenario, vp) => {
  console.enableLogging();
  console.log('SCENARIO > ' + scenario.label);
  console.disableLogging();
  await require('./clickAndHoverHelper')(page, scenario);
};
