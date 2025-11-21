document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', async function (e) {
        e.preventDefault(); // cegah reload default

        const submitBtn = form.querySelector('.login-btn');
        submitBtn.classList.add('loading'); // animasi tombol

        try {
            // kirim ke PHP sesuai dengan action="adminlogin.php"
            const response = await fetch("adminlogin.php", {
                method: "POST",
                body: new FormData(form)
            });

            const result = await response.text().then(t => t.trim());

            if (result === "success") {
                window.location.href = "index.html"; // redirect
            } else {
                alert("Email atau password salah!");
            }
        } catch (err) {
            alert("Terjadi error: " + err.message);
        }

        submitBtn.classList.remove('loading');
    });
});
