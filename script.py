# Sample venue data (replace with your actual venue data)
venues = [
    {"name": "Venue A", "location": "City1", "capacity": 200, "price": 1000},
    {"name": "Venue B", "location": "City1", "capacity": 150, "price": 800},
    {"name": "Venue C", "location": "City1", "capacity": 60, "price": 600},
    # Add more venues here
]

# User input prompt format: location budget typeOfEvent numberOfPeople
user_input = input("Enter your event details (location budget typeOfEvent numberOfPeople): ")
location, budget, event_type, num_people = user_input.split()

# Convert budget and num_people to integers
budget = int(budget)
num_people = int(num_people)

# Function to filter venues based on user input
def suggest_venues(location, budget, event_type, num_people):
    suggested_venues = []

    for venue in venues:
        if (
            venue["location"].lower() == location.lower()
            and venue["price"] <= budget
            and event_type.lower() in venue["name"].lower()
            and venue["capacity"] >= num_people
        ):
            suggested_venues.append(venue)

    return suggested_venues

# Get venue suggestions
suggested_venues = suggest_venues(location, budget, event_type, num_people)

# Display venue suggestions
if suggested_venues:
    print("Suggested Venues:")
    for venue in suggested_venues:
        print(f"{venue['name']} (Capacity: {venue['capacity']}, Price: ${venue['price']})")
else:
    print("No venues found matching your criteria.")
