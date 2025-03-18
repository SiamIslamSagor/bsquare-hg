"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            We encountered an error while rendering this page. Please try
            refreshing or contact support if the problem persists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Try again
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Refresh page
            </Button>
          </div>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <div className="mt-8 p-4 bg-muted rounded-md text-left overflow-auto max-w-full">
              <p className="font-mono text-sm text-red-500 whitespace-pre-wrap">
                {this.state.error.toString()}
              </p>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
