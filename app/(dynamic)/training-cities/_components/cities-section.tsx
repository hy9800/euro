import CityCard from "@/components/cards/city";
import AnimatedCitiesGrid from "@/components/shared/animated";
import SearchBanner from "@/components/shared/search-banner";

interface CitiesSectionProps {
  cities: City[];
}

export default function CitiesSection({ cities }: CitiesSectionProps) {
  return (
    <>
      {/* Search Banner */}
        <SearchBanner resetBehavior="local" />

      {/* Display Cities */}
      <section 
        aria-label={`${cities.length} training cities available`}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="numberOfItems" content={String(cities.length)} />
        
        <nav role="list" aria-label="Professional training cities worldwide">
          <AnimatedCitiesGrid>
            {cities.map((city, index) => (
              <article 
                key={city.id}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                role="listitem"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <div itemProp="item" itemScope itemType="https://schema.org/Place">
                  <CityCard city={city} />
                </div>
              </article>
            ))}
          </AnimatedCitiesGrid>
        </nav>
      </section>
    </>
  );
}

