// Handling Comment Submission
document.querySelector('.comment-btn').addEventListener('click', function() {
    const commentText = document.querySelector('.comment-box textarea').value;

    if (commentText.trim() !== "") {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p><strong>Anonymous:</strong> ${commentText}</p>`;
        document.getElementById('comments-list').appendChild(newComment);

        // Clear the textarea after submitting
        document.querySelector('.comment-box textarea').value = "";
    } else {
        alert("Please enter a comment before submitting!");
    }
});

// Add smooth scroll functionality to "Explore Latest Posts" button
document.querySelector('.hero-banner button').addEventListener('click', function() {
    document.getElementById('latest-posts').scrollIntoView({ behavior: 'smooth' });
});
