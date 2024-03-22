// Calculates the distance in blocks from headquarters (42nd street)
function distanceFromHqInBlocks(blocks) {
    const hq = 42; // Headquarters address
    return Math.abs(blocks - hq); // Absolute difference gives distance
}

// Calculates the distance in feet from headquarters (42nd street)
function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264; // 1 block is equivalent to 264 feet
    return distanceFromHqInBlocks(blocks) * blockInFeet;
}

// Calculates the distance in feet between two locations
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // Assuming 1 block is equivalent to 264 feet
}

// Calculates the fare price based on the distance travelled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot for distances between 400 and 2000 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // $25 flat fare for distances between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // Handling distances over 2500 feet
    }
}

