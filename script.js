function froyo() {
    // Prompt the user to enter a flavor.
    const userFlavor = prompt("Please enter a flavor comma-separated:")

    // The user's input string is split into an array of flavors.
    const flavorsArray = userFlavor.split(',')

    // Define objects to store flavor counts.
    const flavorCounts = {
        vanilla: 0,
        strawberry: 0,
        coffee: 0
    }

    // A loop is used to iterate through the array of flavors.
    for (let i = 0; i < flavorsArray.length; i++) {
        const flavor = flavorsArray[i];
        flavorCounts[flavor] += 1;
    }

    // Return the result
    return flavorCounts;
}

// Display the flavor counts
console.log(froyo())