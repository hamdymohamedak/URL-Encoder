function encodeURL() {
    const baseURL = document.getElementById("baseURL").value; // الحصول على عنوان الـ URL الأساسي المدخل من قبل المستخدم
    const urlInput = document.getElementById("urlInput").value;
    
    // تحقق إذا كان المدخل فارغًا
    if (!urlInput) {
        alert("Please enter a URL to encode.");
        return;
    }

    // تشفير الـ URL
    const encodedURL = encodeURIComponent(urlInput);
    
    // بناء الـ URL النهائي باستخدام العنوان الأساسي المدخل
    const convertedURL = `${baseURL}?s=${encodedURL}`;

    // عرض الـ URL المحول في الـ textarea
    document.getElementById("output").value = convertedURL;
}
