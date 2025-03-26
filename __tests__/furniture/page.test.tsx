import { render, screen } from "@testing-library/react";
import FurniturePage from "@/app/furniture/page";
import { DUMMY_FURNITURE } from "@/constants/furniture";

describe("FurniturePage", () => {
  it("renders the page title", () => {
    render(<FurniturePage />);
    expect(screen.getByText("Our Furniture Collection")).toBeInTheDocument();
  });

  it("renders all furniture items", () => {
    render(<FurniturePage />);
    
    // Check if all furniture items are rendered
    // Get all cards
    const cards = screen.getAllByRole("article");
    
    // Check each card matches with our dummy data
    cards.forEach((card, index) => {
      const item = DUMMY_FURNITURE[index];
      
      // Check if all required elements are present in the card
      expect(card).toHaveTextContent(item.name);
      expect(card).toHaveTextContent(item.description);
      expect(card).toHaveTextContent(item.category);
      expect(card).toHaveTextContent(item.rating.toString());
      expect(card).toHaveTextContent(`$${item.price.toFixed(2)}`);
      
      // Check stock status
      const stockStatus = item.inStock ? "In Stock" : "Out of Stock";
      expect(card).toHaveTextContent(stockStatus);
    });
  });

  it("renders correct number of furniture cards", () => {
    render(<FurniturePage />);
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(DUMMY_FURNITURE.length);
  });

  it("displays correct price format", () => {
    render(<FurniturePage />);
    DUMMY_FURNITURE.forEach((item) => {
      const price = screen.getByText(`$${item.price.toFixed(2)}`);
      expect(price).toBeInTheDocument();
    });
  });

  it("displays correct stock status badges", () => {
    render(<FurniturePage />);
    const inStockItems = DUMMY_FURNITURE.filter(item => item.inStock);
    const outOfStockItems = DUMMY_FURNITURE.filter(item => !item.inStock);

    expect(screen.getAllByText("In Stock")).toHaveLength(inStockItems.length);
    expect(screen.getAllByText("Out of Stock")).toHaveLength(outOfStockItems.length);
  });

  it("renders all furniture images", () => {
    render(<FurniturePage />);
    DUMMY_FURNITURE.forEach((item) => {
      const image = screen.getByAltText(item.name);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", item.imageUrl);
    });
  });

  it("renders view details buttons for all items", () => {
    render(<FurniturePage />);
    const viewDetailsButtons = screen.getAllByText("View Details");
    expect(viewDetailsButtons).toHaveLength(DUMMY_FURNITURE.length);
  });
});
