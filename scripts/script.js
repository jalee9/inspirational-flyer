// Function to launch confetti at the location of the button
function launchConfetti() {
    confetti({
        particleCount: 100, // Number of confetti pieces to launch
        spread: 70, // Spread angle of the confetti
        origin: {y: 0.6} // Origin point on the Y axis from which confetti will pop
    });
}
