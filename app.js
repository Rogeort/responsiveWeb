var tag = document.getElementById('c');

let details = navigator.userAgent;

let regexp = /android|iphone|kindle|ipad/i;

let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
    tag.addEventListener('click', function() {
        console.log('clicked');
    });

    tag.href="com.android.calculator2";
} else {
   tag.href="ms-calculator://"
}


