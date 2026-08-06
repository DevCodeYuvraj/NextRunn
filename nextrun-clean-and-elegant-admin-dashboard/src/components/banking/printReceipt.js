export default function printReceipt(
  transaction,
  profile
) {console.log(profile);
console.log(profile?.image);
  const popup = window.open(
    "",
    "_blank",
    "width=900,height=900"
  );

  if (!popup) return;

  popup.document.write(`
<!DOCTYPE html>
<html>
<head>
<title>Transaction Receipt</title>

<style>

*{
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
margin:0;
padding:40px;
background:#f4f7fb;
}

.receipt{
max-width:760px;
margin:auto;
background:#fff;
padding:40px;
border-radius:14px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

.header{
display:flex;
justify-content:space-between;
align-items:flex-start;
padding-bottom:25px;
border-bottom:1px solid #ececec;
margin-bottom:35px;
}

.logo{
font-size:34px;
font-weight:800;
color:#4f6ef7;
}

.title{
font-size:30px;
font-weight:700;
margin-bottom:8px;
}

.subtitle{
color:#7d8b99;
font-size:14px;
}

.customer{
display:flex;
align-items:center;
gap:18px;
margin-bottom:35px;
}

.customer img{
width:70px;
height:70px;
border-radius:50%;
object-fit:cover;
}

.customer h3{
margin:0;
font-size:22px;
}

.customer p{
margin-top:6px;
color:#7d8b99;
}

.grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:18px;
margin-bottom:35px;
}

.card{
background:#f8fafc;
padding:18px;
border-radius:10px;
}

.card span{
display:block;
font-size:13px;
color:#8fa0b3;
margin-bottom:8px;
}

.card strong{
font-size:16px;
}

table{
width:100%;
border-collapse:collapse;
margin-bottom:30px;
}

th{
background:#f7f8fb;
padding:14px;
text-align:left;
}

td{
padding:16px;
border-bottom:1px solid #ececec;
}

.total{
display:flex;
justify-content:flex-end;
gap:30px;
font-size:22px;
font-weight:700;
margin-top:25px;
}

.footer{
margin-top:55px;
text-align:center;
color:#8d99ae;
}

@media print{

body{
background:white;
padding:0;
}

.receipt{
box-shadow:none;
padding:0;
max-width:100%;
}

}

</style>

</head>

<body>

<div class="receipt">

<div class="header">

<div>

<div class="title">
Transaction Receipt
</div>

<div class="subtitle">
Nextrun Banking
</div>

</div>

<div class="logo">
Nextrun.
</div>

</div>

<div class="customer">

${
  profile?.image
    ? `<img
         src="${
           typeof profile.image === "string"
             ? profile.image
             : profile.image.src
         }"
         alt="${transaction.company}"
       />`
    : ""
}

<div>

<h3>${transaction.company}</h3>

<p>${transaction.email}</p>

</div>

</div>

<div class="grid">

<div class="card">

<span>Invoice</span>

<strong>${transaction.invoice}</strong>

</div>

<div class="card">

<span>Date</span>

<strong>${transaction.date}</strong>

</div>

<div class="card">

<span>Type</span>

<strong>${transaction.type}</strong>

</div>

</div>

<table>

<thead>

<tr>

<th>Description</th>

<th>Amount</th>

</tr>

</thead>

<tbody>

<tr>

<td>
Payment to ${transaction.company}
</td>

<td>
${transaction.amount}
</td>

</tr>

</tbody>

</table>

<div class="total">

<span>Total</span>

<strong>${transaction.amount}</strong>

</div>

<div class="footer">

Thank you for banking with
Nextrun.

</div>

</div>

<script>

window.onload=function(){

window.print();

setTimeout(function(){

window.close();

},300);

}

</script>

</body>

</html>

`);

  popup.document.close();
}