const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");

const saveToLocalStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        form.email.value = formData.email || "";
        form.message.value = formData.message || "";
    }
};

loadFromLocalStorage();

form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim(); // Обрізаємо зайві пробіли
    saveToLocalStorage();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log("Form submitted:", formData);

    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
});

