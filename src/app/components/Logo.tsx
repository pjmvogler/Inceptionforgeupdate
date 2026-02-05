// NOTE: Figma Make exports sometimes use the non-standard "figma:asset" scheme.
// That won't work in a normal Vite deploy, so we import the file from /src/assets.
import logoImage from '@/assets/4ce70965a299d887c6cc6e8ae77b9b0e9edc7c68.png';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className ?? ''}`.trim()}>
      <img
        src={logoImage}
        alt="Inception Forge"
        className="h-[79px] w-auto"
        style={{
          filter: 'brightness(1.5) saturate(1.3)',
        }}
      />
    </div>
  );
}
