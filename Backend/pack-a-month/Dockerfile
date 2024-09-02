# Use an official JDK runtime as a parent image
FROM openjdk

# Set the working directory inside the container
WORKDIR /app

# Copy the jar file from the target directory to the container
COPY target/*.jar app.jar

# Expose the port the application runs on
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
