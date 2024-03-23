var images = ["/swipenglish/sourceFiles/ogretici1.webp", "/swipenglish/sourceFiles/ogretici2.webp", "/swipenglish/sourceFiles/ogretici3.webp"]; // Galeri için gösterilecek öğretici resimlerin listesi
    
        var currentIndex = 0;
        var galleryContainer = document.getElementById('galleryContainer');
        var galleryImage = document.getElementById('galleryImage');
    
        function openGallery() {
            currentIndex = 0; // Galeri açıldığında ilk fotoğrafı göster
            galleryImage.src = images[currentIndex];
            galleryContainer.style.display = 'block';
        }
    
        function closeGallery() {
            galleryContainer.style.display = 'none';
        }
    
        function nextImage() {
            currentIndex++;
            if (currentIndex >= images.length) {
                closeGallery(); // Son fotoğrafı gösterdikten sonra galeriyi kapat
            } else {
                galleryImage.src = images[currentIndex];
            }
        }
        function startTimer() {
        var button = document.getElementById("myButton");
        button.disabled = true; // Butonun tekrar tıklanmasını engellemek için devre dışı bırakıyoruz.
        setTimeout(function() {
        button.style.display = "none"; // Butonu gizle
        button.disabled = false; // Butonu tekrar tıklanabilir hale getir
        }, 5000); // 10 saniye (10000 milisaniye) sonra gizle
    }

        // Tanıtıcı butona tıklandığında galeriyi aç
        document.querySelector('.tanitici').addEventListener('click', openGallery);