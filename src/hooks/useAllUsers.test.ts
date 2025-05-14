import { renderHook } from "@testing-library/react";
import { useUsers } from "./useAllUsers";

describe("useUsers", () => {
  it("should return successful query result when fetchUsers succeeds", () => {
    const mockData = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];

    jest.mock("../services/allUsers", () => ({
      fetchUsers: jest.fn().mockResolvedValue(mockData),
    }));

    const { result } = renderHook(() => useUsers());

    expect(result.current.data).toEqual(mockData);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("should handle error state when fetchUsers fails", () => {
    const mockError = new Error("Failed to fetch users");

    jest.mock("../services/allUsers", () => ({
      fetchUsers: jest.fn().mockRejectedValue(mockError),
    }));

    const { result } = renderHook(() => useUsers());

    expect(result.current.error).toEqual(mockError);
    expect(result.current.isError).toBe(true);
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.isLoading).toBe(false);
  });
});
