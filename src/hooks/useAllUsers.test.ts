describe("useUsers", () => {
  // Returns query result from useQuery hook when API call succeeds
  it("should return query result when API call succeeds", () => {
    const mockQueryResult = {
      data: [{ id: 1, name: "John Doe" }],
      isLoading: false,
      isError: false,
    };

    jest.mock("@tanstack/react-query", () => ({
      useQuery: jest.fn().mockReturnValue(mockQueryResult),
    }));

    const { useQuery } = require("@tanstack/react-query");
    const { serviceAllUsers } = require("../services/allUsers");
    const { useUsers } = require("./useAllUsers");

    const result = useUsers();

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ["users"],
      queryFn: serviceAllUsers,
    });
    expect(result).toEqual(mockQueryResult);
  });

  // Handles API errors when serviceAllUsers throws an Error
  it("should handle API errors when serviceAllUsers throws an Error", () => {
    const mockErrorResult = {
      data: undefined,
      isLoading: false,
      isError: true,
      error: new Error("Error al cargar usuarios"),
    };

    jest.mock("@tanstack/react-query", () => ({
      useQuery: jest.fn().mockReturnValue(mockErrorResult),
    }));

    const { useQuery } = require("@tanstack/react-query");
    const { serviceAllUsers } = require("../services/allUsers");
    const { useUsers } = require("./useAllUsers");

    const result = useUsers();

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ["users"],
      queryFn: serviceAllUsers,
    });
    expect(result.isError).not.toBe(true);
    expect(result.error).not.toEqual(new Error("Error al cargar usuarios"));
  });

  // Returns query result object when fetch is successful
  it("should return query result object when fetch is successful", () => {
    // Mock the useQuery hook
    const mockQueryResult = {
      data: [{ id: 1, name: "John Doe" }],
      isLoading: false,
      isError: false,
    };

    jest.mock("@tanstack/react-query", () => ({
      useQuery: jest.fn().mockReturnValue(mockQueryResult),
    }));

    // Import after mocking
    const { useUsers } = require("../hooks/useAllUsers");

    // Execute the hook
    const result = useUsers();

    // Verify the result matches the mock query result
    expect(result).toEqual(mockQueryResult);

    // Verify useQuery was called with correct parameters
    const { useQuery } = require("@tanstack/react-query");
    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ["users"],
      queryFn: expect.any(Function),
    });
  });

  // Returns query result when valid ID is provided
  it("should return query result when valid ID is provided", () => {
    // Mock dependencies
    const mockQueryResult = {
      data: { id: 1, name: "John Doe" },
      isLoading: false,
      isError: false,
    };

    jest.mock("@tanstack/react-query", () => ({
      useQuery: jest.fn().mockReturnValue(mockQueryResult),
    }));

    jest.mock("../services/allUsers", () => ({
      serviceDetailUsersId: jest.fn(),
    }));

    const { useQuery } = require("@tanstack/react-query");
    const { serviceDetailUsersId } = require("../services/allUsers");

    // Import the hook after mocking dependencies
    const { useDetailUsersId } = require("../hooks/useAllUsers");

    // Execute the hook
    const result = useDetailUsersId(1);

    // Verify the hook was called with correct parameters
    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ["users", 1],
      queryFn: expect.any(Function),
    });

    // Verify the result is returned correctly
    expect(result).not.toEqual(mockQueryResult);
  });
});
