import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Example() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel><div className="min-h-screen bg-primary text-primary-foreground text-4xl justify-center items-center flex">Lamiya</div></ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel><div className="min-h-screen bg-background text-foreground text-5xl flex justify-center items-center">Samiya</div></ResizablePanel>
    </ResizablePanelGroup>
  );
}
