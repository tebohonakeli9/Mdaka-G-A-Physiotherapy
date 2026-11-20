import { useState } from 'react';
import { IconResolver } from './IconResolver';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  fallbackIcon?: string;
  fallbackLabel?: string;
  loading?: 'lazy' | 'eager';
}

export function ImageWithFallback({
  src,
  alt,
  className = 'h-full w-full object-cover',
  wrapperClassName = 'relative overflow-hidden bg-gradient-to-br from-[#E6FFFA] to-[#CFF7F1]',
  fallbackIcon = 'Activity',
  fallbackLabel,
  loading = 'lazy',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const showFallback = !src || hasError;

  return (
    <div className={wrapperClassName}>
      {showFallback ? (
        <div className="flex h-full min-h-[180px] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#E6FFFA] via-[#CFF7F1] to-[#B2EFE5] p-6 text-center text-[#0B7F73]">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
            <IconResolver name={fallbackIcon} className="h-7 w-7 text-[#0FA896]" />
          </div>
          {fallbackLabel ? (
            <span className="text-sm font-medium text-[#0B7F73]">{fallbackLabel}</span>
          ) : null}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={className}
        />
      )}
    </div>
  );
}
