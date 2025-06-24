// Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            alert('Mobile menu would open here in a real implementation');
        });

        // Add to cart functionality
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productTitle = productCard.querySelector('.product-title').textContent;
                
                // Update cart count
                const cartCount = document.querySelector('.cart-count');
                cartCount.textContent = parseInt(cartCount.textContent) + 1;
                
                // Show confirmation
                alert(`Added "${productTitle}" to your cart`);
            });
        });
        
        // Pause slider on hover
        const slider = document.querySelector('.slider');
        slider.addEventListener('mouseenter', () => {
            slider.style.animationPlayState = 'paused';
        });
        
        slider.addEventListener('mouseleave', () => {
            slider.style.animationPlayState = 'running';
        });