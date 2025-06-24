document.getElementById("submit").addEventListener("click", () => {
    const url = document.getElementById("url").value;
    if (!url) {
        alert("Please enter a URL.");
        return;
    }

    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=200x200`;
    document.getElementById("qrImage").src = qrApiUrl;
    

});
