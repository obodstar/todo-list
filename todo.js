function tambah() {
    // Ambil nilai dari input
    var inputValue = document.getElementById('jawab').value;
    
    // Cek apakah input kosong
    if (inputValue.trim() === "") {
        alert("Jangan kosong!");
        return;
    }
    
    // Cek apakah panjang input melebihi 20 karakter
    if (inputValue.length > 20) {
        alert("Maksimal 20 huruf saja!");
        return;
    }
    
    // Buat baris baru untuk tabel
    var tr = document.createElement("tr");
    
    // Buat kolom untuk teks tugas
    var tdTask = document.createElement("td");
    tdTask.textContent = inputValue;
    
    // Buat kolom untuk tombol "x"
    var tdAction = document.createElement("td");
    tdAction.className = "right-align"; // Menambahkan kelas untuk rata kanan
    var span = document.createElement("span");
    span.className = "close";
    span.textContent = "x";
    
    // Fungsi untuk menghapus tugas ketika tombol "x" diklik
    span.onclick = function () {
        this.parentElement.parentElement.remove();
    };
    
    // Menambahkan tombol "x" ke dalam kolom aksi
    tdAction.appendChild(span);
    
    // Menambahkan kolom tugas dan aksi ke dalam baris
    tr.appendChild(tdTask);
    tr.appendChild(tdAction);
    
    // Menambahkan baris ke dalam tabel
    document.querySelector(".table-striped").appendChild(tr);
    
    // Reset input setelah menambah tugas
    document.getElementById('jawab').value = "";
}
