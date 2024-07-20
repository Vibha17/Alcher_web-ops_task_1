    const sidebarToggle = document.querySelector('.bars');
    const sidebar = document.querySelector('.sidebar');
    const home = document.querySelector('.home');
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', () => {
        dropdown.querySelector('.menu').classList.toggle('show');
      });
    });
  
    const userTable = document.getElementById('user-table');
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        data.users.forEach(user => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${user.firstName} ${user.lastName}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td class="actions">
              <button class="edit-button"><i class="fa-solid fa-pen"></i> Edit</button>
              <button class="delete-button"><i class="fa-solid fa-trash"></i> Delete</button>
            </td>
          `;
          userTable.appendChild(row);
        });
      });
  
    userTable.addEventListener('click', (event) => {
      if (event.target.classList.contains('edit-button') || event.target.closest('.edit-button')) {
        alert('Edit button clicked');
      } else if (event.target.classList.contains('delete-button') || event.target.closest('.delete-button')) {
        event.target.closest('tr').remove();
      }
    });
  