import { expect, test, describe, beforeEach } from "vitest";
import Hero from "../components/Hero";
import { render, screen} from '@testing-library/react';

describe("Hero test", () => {
    beforeEach(() => {
        render(<Hero />);
    });
    test("Should show title", () => {
        expect(screen.getByTestId("hero")).toBeDefined();
    })
    test("Should show subtitle", () => {
        expect(screen.getByRole('heading', {
            name: /simplifique sua leitura com o meu resuminho, um sumarizador de artigos de código aberto que transforma artigos longos em resumos claros e concisos\./i
          }) );
    })

    test("Should show github button", () => {
        
    })
})