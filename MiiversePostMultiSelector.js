(function() {
    // Show overflow data
    document.querySelector('.post-list-outline').style.overflow = 'visible';

    // Show all spoilers
    document.querySelectorAll('.hidden-content-button').forEach((button) => {
        button.click();
    });

    var clickedLinks = [];

    // For each post, create a selection button
    var posts = document.querySelectorAll('.post');
    posts.forEach((post) => {
        post.style.position = 'relative';

        var button = document.createElement('button');
        button.style.cssText = [
            'position: absolute',
            'top: 0',
            'left: 101%',
            'bottom: 0',
            'background: #2980b9',
            'color: #fff',
            'font-size: 20px',
            'padding: 8px 32px',
        ].join(';');

        button.className = 'KrystalArchiveButton';

        button.setAttribute('data-link', post.getAttribute('data-href') || post.getAttribute('data-href-hidden'));

        button.innerHTML = 'Select';

        post.appendChild(button);
    });

    // Watch clicks for selection buttons
    document.addEventListener('click', (e) => {
        if (!e.target.matches('.KrystalArchiveButton')) {
            return;
        }

        clickedLinks.push(e.target.getAttribute('data-link'));

        e.target.parentNode.removeChild(e.target);
    });

    // Output data to console
    window.outputData = () => {
        console.log(JSON.stringify(clickedLinks));
    };
}());