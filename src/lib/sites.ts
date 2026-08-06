import { SiteConfig } from '@/types/site';
import sitesData from '@/data/sites.json';

const sites = sitesData as SiteConfig[];

export function getAllSites(): SiteConfig[] {
  return sites;
}

export function getSiteById(id: string): SiteConfig | null {
  return sites.find(site => site.id === id) || null;
}

export function getSiteBySubdomain(subdomain: string): SiteConfig | null {
  return sites.find(site => site.subdomain.toLowerCase() === subdomain.toLowerCase()) || null;
}
