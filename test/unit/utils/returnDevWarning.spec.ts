import { returnDevWarning } from "../../../utils/returnDevWarning";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("returnDevWarning", () => {
    let consoleLogSpy: ReturnType<typeof vi.spyOn>;
    let consoleInfoSpy: ReturnType<typeof vi.spyOn>;
    let consoleWarnSpy: ReturnType<typeof vi.spyOn>;
    let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => { });
        consoleInfoSpy = vi.spyOn(console, "info").mockImplementation(() => { });
        consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => { });
        consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => { });
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
        consoleInfoSpy.mockRestore();
        consoleWarnSpy.mockRestore();
        consoleErrorSpy.mockRestore();
    });

    it("should call console.log with message when no type is specified", () => {
        const message = "Test warning message";
        returnDevWarning(message);

        if (import.meta.dev) {
            expect(consoleLogSpy).toHaveBeenCalledWith(message);
            expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        }
    });

    it("should call console.info with message when type is 'info'", () => {
        const message = "Test info message";
        returnDevWarning(message, "info");

        if (import.meta.dev) {
            expect(consoleInfoSpy).toHaveBeenCalledWith(message);
            expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
            expect(consoleLogSpy).not.toHaveBeenCalled();
        }
    });

    it("should call console.warn with message when type is 'warn'", () => {
        const message = "Test warn message";
        returnDevWarning(message, "warn");

        if (import.meta.dev) {
            expect(consoleWarnSpy).toHaveBeenCalledWith(message);
            expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
            expect(consoleLogSpy).not.toHaveBeenCalled();
        }
    });

    it("should call console.error with message when type is 'error'", () => {
        const message = "Test error message";
        returnDevWarning(message, "error");

        if (import.meta.dev) {
            expect(consoleErrorSpy).toHaveBeenCalledWith(message);
            expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
            expect(consoleLogSpy).not.toHaveBeenCalled();
        }
    });
});

