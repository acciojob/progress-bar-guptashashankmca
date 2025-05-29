//your JS code here. If required.
let currentStep = 1;

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const progress = document.getElementById('progress');

function updateProgress() {
    // Update active circles
    for (let i = 1; i <= 5; i++) {
        const circle = document.getElementById(`circle-${i}`);
        if (i <= currentStep) {
            circle.classList.remove('border-gray-300', 'text-gray-500');
            circle.classList.add('bg-blue-500', 'text-white', 'border-blue-500');
        } else {
            circle.classList.remove('bg-blue-500', 'text-white', 'border-blue-500');
            circle.classList.add('border-gray-300', 'text-gray-500');
        }
    }
    
    // Update progress line (0% to 100% across 4 segments)
    const progressWidth = ((currentStep - 1) / 4) * 100;
    progress.style.width = `${progressWidth}%`;
    
    // Update button states
    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === 5;
    
    // Update button styles based on disabled state
    prevBtn.classList.toggle('bg-gray-400', currentStep === 1);
    prevBtn.classList.toggle('cursor-not-allowed', currentStep === 1);
    prevBtn.classList.toggle('bg-blue-500', currentStep !== 1);
    prevBtn.classList.toggle('hover:bg-blue-600', currentStep !== 1);
    nextBtn.classList.toggle('bg-gray-400', currentStep === 5);
    nextBtn.classList.toggle('cursor-not-allowed', currentStep === 5);
    nextBtn.classList.toggle('bg-blue-500', currentStep !== 5);
    nextBtn.classList.toggle('hover:bg-blue-600', currentStep !== 5);
}

nextBtn.addEventListener('click', () => {
    if (currentStep < 5) {
        currentStep++;
        updateProgress();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgress();
    }
});

// Initialize the progress bar
updateProgress();