try {
    // Attempting to execute code that may throw an error
    let result = someFunction(); // Assuming someFunction() may throw an error

    // If no error is thrown, continue executing
    console.log('Result:', result);
} catch (error) {
    // Handling the error if one occurs
    console.error('Error caught:', error.message);
} finally {
    // Optional finally block
    console.log('Finally block executed.');
}
