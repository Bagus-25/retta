let currentPassword = "";
const targetPassword = "retta";
let selectedGift = "";

function pressKey(char) {
    currentPassword += char;
    updatePasswordDisplay();
}

function deleteKey() {
    currentPassword = currentPassword.slice(0, -1);
    updatePasswordDisplay();
}

function updatePasswordDisplay() {
    document.getElementById("password-input").value = currentPassword;
    document.getElementById("error-msg").style.display = "none";
}

function checkPassword() {
    if (currentPassword.toLowerCase() === targetPassword) {
        goToPage(2);
    } else {
        document.getElementById("error-msg").style.display = "block";
        currentPassword = "";
        updatePasswordDisplay();
    }
}

function goToPage(pageNum) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    setTimeout(() => {
        document.getElementById(`page${pageNum}`).classList.add('active');
    }, 100);
}

function selectOption(type, element) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    selectedGift = type;

    const customInputContainer = document.getElementById('custom-input-container');
    const saveContainer = document.getElementById('save-container');
    document.getElementById('save-msg').style.display = 'none';

    if (type === 'opsional') {
        customInputContainer.style.display = 'block';
        saveContainer.style.display = 'block';
        document.getElementById('custom-gift').focus();
    } else {
        customInputContainer.style.display = 'none';
        saveContainer.style.display = 'block';
    }
}

function saveSelection() {
    let finalSelection = selectedGift;
    if (selectedGift === 'opsional') {
        finalSelection = document.getElementById('custom-gift').value;
        if (!finalSelection.trim()) {
            alert('Isi dulu dong kolomnya sayang!');
            return;
        }
    }
    document.getElementById('save-msg').style.display = 'block';
}
