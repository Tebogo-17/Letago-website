document.getElementById('surpriseBtn').addEventListener('click', function() {
    const message = document.getElementById('secretMessage');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
        this.innerText = "Close Message💌";
    } else{
        message.classList.add('hidden');
        this.innerText = "Click For A Message💌";
    }
});