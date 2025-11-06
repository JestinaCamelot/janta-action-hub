import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Newspaper } from "lucide-react";

const newsItems = [
  {
    source: "The Times of India",
    title: "Citizens Rally for Road Safety Reform",
    date: "March 15, 2024",
    link: "#"
  },
  {
    source: "NDTV",
    title: "Janta Foundation Files PIL Against Hospital Billing Malpractice",
    date: "March 10, 2024",
    link: "#"
  },
  {
    source: "Indian Express",
    title: "Community Mobilization Leads to Local Healthcare Policy Change",
    date: "March 5, 2024",
    link: "#"
  },
  {
    source: "Hindustan Times",
    title: "Foundation Supports Families Affected by Consumer Rights Violations",
    date: "February 28, 2024",
    link: "#"
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Newspaper className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">In The News</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our work in action: Recent media coverage and press statements
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {newsItems.map((item, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{item.source}</span>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <CardTitle className="text-lg flex items-start justify-between gap-2">
                  {item.title}
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
