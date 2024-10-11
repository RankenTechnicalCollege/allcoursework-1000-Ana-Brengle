document.getElementById('btnClick').onclick = () => {

  const burgers = parseInt(document.getElementById('burgers'));

  const fries = parseInt(document.getElementById('fries'));

  const sodas = parseInt(document.getElementById('sodas'));

   const total = (burgers * 1) + (fries * 2) + (sodas + 2.50);
};