import { timelineItems } from "../utils/data";

const Timeline = () => {
  return (
    <div>
      <section className="section timeline">
        <div className="section-title">
          <h2>timeline</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center timeline-center">
          {timelineItems.map((item, index) => (
            <article className="timeline-item" key={index}>
              <h4 className="font-bold">{item.year}</h4>
              <p>{item.content}</p>
              <span className="number">{item.number}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Timeline;
