using System.ComponentModel.DataAnnotations;
public abstract class BaseEntity 
{
  [Key]
  public abstract int Id { get; set; }
}