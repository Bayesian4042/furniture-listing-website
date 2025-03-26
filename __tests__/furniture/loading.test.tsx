import { render, screen } from "@testing-library/react";
import FurnitureLoading from "@/app/furniture/loading";

describe("FurnitureLoading", () => {
  it("renders the loading skeleton", () => {
    render(<FurnitureLoading />);
    
    // Check if the main page title skeleton is rendered
    expect(screen.getByTestId("page-title-skeleton")).toBeInTheDocument();
  });

  it("renders correct number of furniture card skeletons", () => {
    render(<FurnitureLoading />);
    const cardSkeletons = screen.getAllByTestId("furniture-card-skeleton");
    expect(cardSkeletons).toHaveLength(6); // We show 6 skeleton cards while loading
  });

  it("renders all required skeleton elements in each card", () => {
    render(<FurnitureLoading />);
    
    // Get all card skeletons
    const cardSkeletons = screen.getAllByTestId("furniture-card-skeleton");
    
    cardSkeletons.forEach(card => {
      // Check for title and status skeletons
      expect(card.querySelector("[data-testid='card-title-skeleton']")).toBeInTheDocument();
      expect(card.querySelector("[data-testid='status-skeleton']")).toBeInTheDocument();
      
      // Check for image skeleton
      expect(card.querySelector("[data-testid='image-skeleton']")).toBeInTheDocument();
      
      // Check for description skeletons
      expect(card.querySelector("[data-testid='description-skeleton']")).toBeInTheDocument();
      
      // Check for category and rating skeletons
      expect(card.querySelector("[data-testid='category-skeleton']")).toBeInTheDocument();
      expect(card.querySelector("[data-testid='rating-skeleton']")).toBeInTheDocument();
      
      // Check for price and button skeletons
      expect(card.querySelector("[data-testid='price-skeleton']")).toBeInTheDocument();
      expect(card.querySelector("[data-testid='button-skeleton']")).toBeInTheDocument();
    });
  });
});
