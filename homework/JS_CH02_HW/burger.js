document.getElementById('btnClick').onclick = () => {

  const burgers = parseInt(document.getElementById('burgers').value);

  const fries = parseInt(document.getElementById('fries').value);

  const sodas = parseInt(document.getElementById('sodas').value);

   const total = (burgers * 1) + (fries * 2) + (sodas * 2.50);

   const totdisplay = `Here's your total: $${total}`;
   
   document.getElementById('total').innerHTML = totdisplay;
};