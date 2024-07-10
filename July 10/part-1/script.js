let tbody = document.querySelector('tbody');

for (let i = 128507; i <= 129999; i++) {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  let td1 = document.createElement('td');
  td.textContent = '&#' + i + ';';
  td1.innerHTML = '&#' + i + ';';
  tr.appendChild(td);
  tr.appendChild(td1);
  tbody.appendChild(tr);
}
