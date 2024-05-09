class LogAuth {
  async signup(formData) {
    try {
      const url = "http://localhost:4000/api/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to signup: " + response.statusText);
      }

      return await response.json();
    } catch (error) {
      throw new Error("Error during signup: " + error.message);
    }
  }

  async login(formData) {
    try {
      const url = "http://localhost:4000/api/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to login: " + response.statusText);
      }

      return await response.json();
    } catch (error) {
      throw new Error("Error during login: " + error.message);
    }
  }
}

export default new LogAuth();
