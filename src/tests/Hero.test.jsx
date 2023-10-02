import { expect, test, describe, beforeEach } from "vitest";
import Hero from "../components/Hero";
import { render, screen, getByTestId} from '@testing-library/react';

describe("Hero test", () => {
    beforeEach(() => {
        render(<Hero />);
    });
    test("Should show title", () => {
        expect(screen.getByTestId("hero")).toBeDefined();
    })
    test("Should show subtitle", () => {
        expect(screen.getByTestId("hero-desc")).toBeDefined();
    })

    test("Should show github button", () => {
        expect(screen.getByTestId("github-btn")).toBeDefined();   
    })
    test('renders logos correctly', () => {
        const { getAllByAltText } = render(<Hero />);
        expect(getAllByAltText(/jessyca-logo/i)).toHaveLength(4);
      });
      
      test('displays header and description correctly', () => {
        const { queryAllByTestId } = render(<Hero />);
        expect(queryAllByTestId("hero")).toBeDefined();
        expect(queryAllByTestId("hero-desc")).toBeDefined();
      });
    
})